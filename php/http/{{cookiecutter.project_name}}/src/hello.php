<?php declare(strict_types=1);

require __DIR__ . '/../vendor/autoload.php';

return function ($event) {
  $name = $event['queryStringParameters'] && array_key_exists('name', $event['queryStringParameters']) ? $event['queryStringParameters']['name'] : $_ENV["DEFAULT_NAME"];

  return [
    'statusCode' => 200,
    'body' => json_encode([
      'message' => 'Hello ' . $name
    ])
  ];
};
