@echo off
chcp 65001 > nul
title مركز تصوير كلية التربية - مولد المحاضرات والملخصات الجامعية PDF (v2)
echo ======================================================================
echo    مركز تصوير كلية التربية - أداة توليد المحاضرات بصيغة PDF (v2)
echo ======================================================================
echo.

set "TARGET_FILE=%~1"

if "%TARGET_FILE%"=="" (
    if exist "data.json" (
        set "TARGET_FILE=data.json"
    ) else if exist "sample-data.json" (
        set "TARGET_FILE=sample-data.json"
    ) else (
        echo [خطأ] لم يتم العثور على data.json أو sample-data.json!
        pause
        exit /b 1
    )
)

echo جاري توليد المحاضرة من الملف: %TARGET_FILE%
echo.
call npm run generate "%TARGET_FILE%"
echo.
echo ======================================================================
echo تم الانتهاء بنجاح! الملفات موجودة في مجلد output
echo ======================================================================
pause
