# Hash-map

class HashMap: # Constructor to initialize the hash map with a specific size
FUNCTION constructor(size):
buckets = new Array of length 'size' (this array will store linked lists or arrays)
size = size

    # Hash function to convert key into array index
    FUNCTION hash(key):
        Initialize variable 'hash' to 0
        FOR each character in key:
            Convert character to its ASCII value and update 'hash' as:
            hash = (hash * 31 + ASCII value of character) % size
        RETURN hash (this will be the index where the key-value pair is stored)

    # Insert method to add or update a key-value pair
    FUNCTION put(key, value):
        index = hash(key)  # Find the index by hashing the key
        IF no bucket exists at index:
            Create an empty bucket (array or linked list) at that index

        FOR each element in the bucket at that index:
            IF the key already exists:
                Update the value for that key
                RETURN

        # If key does not exist, add a new key-value pair to the bucket
        Append (key, value) to the bucket at that index

    # Get method to retrieve a value by key
    FUNCTION get(key):
        index = hash(key)  # Find the index by hashing the key
        IF no bucket exists at index:
            RETURN null (the key does not exist)

        FOR each element in the bucket at that index:
            IF the key matches the element's key:
                RETURN the corresponding value

        RETURN null (key not found)

    # Remove method to delete a key-value pair
    FUNCTION remove(key):
        index = hash(key)  # Find the index by hashing the key
        IF no bucket exists at index:
            RETURN false (key does not exist)

        FOR each element in the bucket at that index:
            IF the key matches the element's key:
                Remove the key-value pair from the bucket
                RETURN true (key-value pair removed)

        RETURN false (key not found)

    # Check if a key exists
    FUNCTION containsKey(key):
        RETURN get(key) != null
