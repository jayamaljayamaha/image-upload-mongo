export const paths = {
  "/create": {
    post: {
      summary: "Upload a new image to the database",
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                file: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Image uploaded",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  file: {
                    type: "object",
                    properties: {
                      fieldname: {
                        type: "string",
                        example: "file",
                      },
                      originalname: {
                        type: "string",
                        example: "sleeping cat.jpeg",
                      },
                      encoding: {
                        type: "string",
                        example: "7bit",
                      },
                      mimetype: {
                        type: "string",
                        example: "image/jpeg",
                      },
                      filename: {
                        type: "string",
                        example: "1de1f135414b1c3797a066d9bafe0c39",
                      },
                      bucketName: {
                        type: "string",
                        example: "uploads",
                      },
                      chunkSize: {
                        type: "integer",
                        format: "int64",
                        example: "261120",
                      },
                      size: {
                        type: "integer",
                        format: "int64",
                        example: "148464",
                      },
                      uploadDate: {
                        type: "string",
                        example: "2022-01-02T18:22:41.139Z",
                      },
                      contentType: {
                        type: "string",
                        example: "image/jpeg",
                      },
                      guid: {
                        type: "string",
                        example: "1de1f135414b1c3797a066d9bafe0c39",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/read/{imageId}": {
    get: {
      summary: "Returns a image details by GUID",
      parameters: [
        {
          name: "imageId",
          in: "path",
          required: "true",
          description: "The GUID of the image to return",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    length: {
                      type: "integer",
                      format: "int64",
                      example: "92452",
                    },
                    chunkSize: {
                      type: "integer",
                      format: "int64",
                      example: "261120",
                    },
                    uploadDate: {
                      type: "string",
                      example: "2022-01-02T18:22:41.139Z",
                    },
                    filename: {
                      type: "string",
                      example: "e075bc66b41f7ef25d3580645711ae9a",
                    },
                    contentType: {
                      type: "string",
                      example: "image/jpeg",
                    },
                    guid: {
                      type: "string",
                      example: "e075bc66b41f7ef25d3580645711ae9a",
                    },
                  },
                },
              },
            },
          },
        },
        "404": {
          description: "Image not found for given GUID",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: {
                    type: "string",
                    example: "No File Exists",
                  },
                },
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: {
                    type: "string",
                    example: "Server error",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/update/{imageId}": {
    patch: {
      summary: "update the image for a given exisitng GUID",
      parameters: [
        {
          name: "imageId",
          in: "path",
          required: "true",
          description: "The GUID of the image to return",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                file: {
                  type: "string",
                  format: "binary",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Image uploaded",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  file: {
                    type: "object",
                    properties: {
                      fieldname: {
                        type: "string",
                        example: "file",
                      },
                      originalname: {
                        type: "string",
                        example: "sleeping cat.jpeg",
                      },
                      encoding: {
                        type: "string",
                        example: "7bit",
                      },
                      mimetype: {
                        type: "string",
                        example: "image/jpeg",
                      },
                      filename: {
                        type: "string",
                        example: "1de1f135414b1c3797a066d9bafe0c39",
                      },
                      bucketName: {
                        type: "string",
                        example: "uploads",
                      },
                      chunkSize: {
                        type: "integer",
                        format: "int64",
                        example: "261120",
                      },
                      size: {
                        type: "integer",
                        format: "int64",
                        example: "148464",
                      },
                      uploadDate: {
                        type: "string",
                        example: "2022-01-02T18:22:41.139Z",
                      },
                      contentType: {
                        type: "string",
                        example: "image/jpeg",
                      },
                      guid: {
                        type: "string",
                        example: "1de1f135414b1c3797a066d9bafe0c39",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "404": {
          description: "Image not found for given GUID",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: {
                    type: "string",
                    example: "No File Exists",
                  },
                },
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: {
                    type: "string",
                    example: "Server error",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/delete/{imageId}": {
    delete: {
      summary: "delete the image by GUID",
      parameters: [
        {
          name: "imageId",
          in: "path",
          required: "true",
          description: "The GUID of the image to return",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  uploadDate: {
                    guid: "string",
                    example: "e075bc66b41f7ef25d3580645711ae9a",
                  },
                },
              },
            },
          },
        },
        "404": {
          description: "Image not found for given GUID",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: {
                    type: "string",
                    example: "No File Exists",
                  },
                },
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: {
                    type: "string",
                    example: "Server error",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
