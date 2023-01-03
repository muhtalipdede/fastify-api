export const getAllProductsSchema = {
    description: 'Get all products',
    tags: ['products'],
    summary: 'Get all products',
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    _id: { type: 'string' },
                    name: { type: 'string' },
                    description: { type: 'string' },
                    price: { type: 'number' },
                    image: { type: 'string' },
                    createdAt: { type: 'string' },
                    updatedAt: { type: 'string' },
                },
            },
        },
    },
};

export const getProductSchema = {
    description: 'Get product by id',
    tags: ['products'],
    summary: 'Get product by id',
    params: {
        type: 'object',
        properties: {
            id: { type: 'string' },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                image: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        },
    },
};

export const createProductSchema = {
    description: 'Create product',
    tags: ['products'],
    summary: 'Create product',
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            price: { type: 'number' },
            image: { type: 'string' },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                image: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        },
    },
};

export const updateProductSchema = {
    description: 'Update product by id',
    tags: ['products'],
    summary: 'Update product by id',
    params: {
        type: 'object',
        properties: {
            id: { type: 'string' },
        },
    },
    body: {
        type: 'object',
        properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            price: { type: 'number' },
            image: { type: 'string' },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                image: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        },
    },
};

export const deleteProductSchema = {
    description: 'Delete product by id',
    tags: ['products'],
    summary: 'Delete product by id',
    params: {
        type: 'object',
        properties: {
            id: { type: 'string' },
        },
    },
    response: {
        200: {
            type: 'object',
            properties: {
                _id: { type: 'string' },
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                image: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        },
    },
};
