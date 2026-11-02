#!/bin/bash
cd "$(dirname "$0")/.."
while pgrep -f "tools/transcript.js yt/tr" > /dev/null; do sleep 20; done
node tools/transcript.js yt/tr mTEjsa8hQZA fth_FkAk968 2eORFeyfYt8 89b4BQ-hVSo c-iVqkkndFc _EJi8DV7koE GAOv1HrDwgo BABm0VFfDFI Dc8PHJ76uUY pvDKTcOsujY > yt/batch2.log 2>&1
