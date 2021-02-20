# AWS SAM template collection

This repository is a collection of AWS SAM templates. All templates are automatically builded using GitHub action and zip artifact are uploaded to a new release. Use SAM init command location parameter to point to zip release artifact.

## Middy

### Base

A base template using [middy](https://github.com/middyjs/middy) library, more information at [template readme](middy/base/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/middy.zip
```

### HTTP API

A base template using [middy](https://github.com/middyjs/middy) library, more information at [template readme](middy/http/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/middy-http.zip
```

### Input validation

A base template using [middy](https://github.com/middyjs/middy) library, more information at [template readme](middy/validation/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/middy-validation.zip
```

---

## NodeJS

### Base

A base template for NodeJS project, more information at [template readme](nodejs/base/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-http.zip
```

### HTTP API

A NodeJS project for HTTP API, more information at [template readme](nodejs/http/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-http.zip
```

### Dependencies Layer

A NodeJS project using dependencies layer, more information at [template readme](nodejs/layer/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-layer.zip
```

### Queue

A NodeJS project for queue worker, more information at [template readme](nodejs/queue/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-queue.zip
```

### Queue with Dead Letter

A NodeJS project for queue worker with Dead Letter queue, more information at [template readme](nodejs/queue-dead-letter/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-queue-dead-letter.zip
```

### Event Bridge events to FIFO Queue

NodeJS Event Bridge events to FIFO Queue template, more information at [template readme](nodejs/event-bridge-queue-fifo/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-event-bridge-queue-fifo.zip
```

### FIFO Queue

A NodeJS project for FIFO queue worker, more information at [template readme](nodejs/queue-fifo/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-queue-fifo.zip
```

### PDF Generator Queue

A NodeJS project for PDF generation using queue worker, more information at [template readme](nodejs/queue-pdf-generator/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-queue-pdf-generator.zip
```

### Lambda@Edge

A NodeJS project for Lambda@Edge, more information at [template readme](nodejs/edge/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-edge.zip
```

### DynamoDB Table

A NodeJS project for DynamoDB table, more information at [template readme](nodejs/dynamodb/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-dynamodb.zip
```

### DynamoDB Table Stream

A NodeJS project for DynamoDB stream, more information at [template readme](nodejs/dynamodb-stream/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/nodejs-dynamodb-stream.zip
```

---

## S3

### SFTP Access

A base template for S3 bucket with SFTP access, more information at [template readme](s3/sftp-access/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/s3-sftp-access.zip
```

### Website

A base template for static website, more information at [template readme](s3/website/README.md)

```bash
sam init --location https://github.com/daaru00/sam-templates/releases/download/1.0.0/s3-website.zip
```
