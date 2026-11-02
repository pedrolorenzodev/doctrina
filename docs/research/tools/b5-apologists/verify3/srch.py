import sys,re
sys.path.insert(0,'.')
import importlib.util
spec=importlib.util.spec_from_file_location('c','cmp.py')
