#!/bin/bash
cd /private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad
while [ ! -f corp/seq2.done ]; do sleep 20; done
SCR=/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad python3 -I tools/vindex.py > idx_build.log 2>&1
echo done > idx.done
