import urllib.request
import re
import json

url = "https://mubiruwilberforce.netlify.app/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req).read().decode("utf-8")
print("HTML length:", len(html))
print("HTML:")
print(html)

scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', html)
print("\nScripts:", scripts)

for s in scripts:
    s_url = s if s.startswith("http") else url.rstrip("/") + "/" + s.lstrip("/")
    try:
        s_data = urllib.request.urlopen(urllib.request.Request(s_url, headers={"User-Agent": "Mozilla/5.0"})).read().decode("utf-8")
        with open("site_script.js", "w") as f:
            f.write(s_data)
        print("Saved script to site_script.js, length:", len(s_data))
    except Exception as e:
        print("Err:", e)
