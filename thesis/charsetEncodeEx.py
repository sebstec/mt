import urllib.parse

pl = "<script>alert('xss')</script>"
encodings = [
    "UTF-8",
    "UTF-16",
    "ISO-8859-1",
    "ISO-8859-15",
    "windows-1252",
]
for enc in encodings:
    pl_encoded = pl.encode(enc)
    print(enc)
    print(pl_encoded)
    print(urllib.parse.quote_plus(pl_encoded))
    print("")

ex_encoding = 'UTF-16'
pl_encoded = pl.encode(ex_encoding)
pl_percent_encoded = urllib.parse.quote_plus(pl_encoded)
print(ex_encoding)
print(pl_encoded)
print(pl_percent_encoded)
