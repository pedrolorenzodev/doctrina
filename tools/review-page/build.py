import os, re, sys

here = os.path.dirname(os.path.abspath(__file__))
data_path, out_path, title = sys.argv[1], sys.argv[2], sys.argv[3]
shell = open(os.path.join(here, "shell.html")).read()
app = open(os.path.join(here, "app.js")).read()
data = open(data_path).read()
assert "</script" not in data + app
shell = re.sub(r"<title>.*?</title>", "<title>" + title + "</title>", shell, count=1)
out = shell.replace("__DATA__", data).replace("__APP__", app)
os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
open(out_path, "w").write(out)
print(len(out.encode()))
