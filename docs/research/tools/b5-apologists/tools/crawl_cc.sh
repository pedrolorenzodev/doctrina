#!/bin/bash
export SCR=/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad/cc
cd /private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad/cc
python3 tools/crawl_mag.py '.' > crawl_mag_all.log 2>&1
python3 tools/crawl.py cot > crawl_cot_all.log 2>&1
echo done > crawl_cc.done
