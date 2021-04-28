# {{cookiecutter.project_name}}

{{cookiecutter.project_description}}

## Events

Request a PDF generation

```json
{
  "detail-type": "Generate PDF",
  "detail": {
    "html": "<html><body><h1>Test</h1></body></html>",
    "fileName": "test.pdf"
  } 
}
```

PDF generation start

```json
{
  "detail-type": "PDF Generation Start",
  "detail": {
    "fileName": "test.pdf"
  } 
}
```

PDF generation error

```json
{
  "detail-type": "PDF Generation Error",
  "detail": {
    "fileName": "test.pdf",
    "error": "Error Message"
  } 
}
```

PDF generation succeeded

```json
{
  "detail-type": "PDF Generation Succeeded",
  "detail": {
    "fileName": "test.pdf",
    "bucketPath": "s3://my-bucket/test.pdf",
    "downloadLink": "https://my-bucket.s3.amazonaws.com/test.pdf?AWSAccessKeyId=AKIAEXAMPLEACCESSKEY&Signature=EXHCcBe%EXAMPLEKnz3r8O0AgEXAMPLE&Expires=1555531131"
  } 
}
```
