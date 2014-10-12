-   [RPC Specification: File API](#RPC-Specification-File-API)
    -   [Types](#Types)
        -   [FileSystem](#FileSystem)
        -   [Entry](#Entry)
    -   [Service](#Service)
        -   [requestFileSystem](#requestFileSystem)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [resolveLocalFileSystemURL](#resolveLocalFileSystemURL)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [getMetadata](#getMetadata)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [moveTo](#moveTo)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [copyTo](#copyTo)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [remove](#remove)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [getParent](#getParent)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [getFile](#getFile)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [read](#read)
        -   [write](#write)
        -   [truncate](#truncate)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [getDirectory](#getDirectory)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [removeRecursively](#removeRecursively)
            -   [Request](#Request)
            -   [Response](#Response)
        -   [readEntries](#readEntries)
            -   [Request](#Request)
            -   [Response](#Response)

RPC Specification: File API[¶](#RPC-Specification-File-API)
===========================================================

This section specifies RPCs made by the File API (incl. Writer, and
Directories and System).

Types[¶](#Types)
----------------

This RPC specification includes the following recurring types, later
denoted by `<name>`.

### FileSystem[¶](#FileSystem)

    { name : "default" }

### Entry[¶](#Entry)

    { name : "file" 
    , fullPath : "/directory/file" 
    , filesystem : <FileSystem>
    , isFile : true
    , isDirectory : false
    }

Service[¶](#Service)
--------------------

All three file-related specifications are merged into a single service
interface, whose operations are further described below.

### requestFileSystem[¶](#requestFileSystem)

#### Request[¶](#Request)

The `params` include the required `type`, i.e., `0` (temporary) or `1`
(persistent), and `size` in bytes, e.g., `1024`.

    JSON: Object
    { id : 1
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.requestFileSystem" 
    , params :
      { type : 1
      , size : 1024
      }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 1
    , jsonrpc: "2.0" 
    , result: <FileSystem>
    }

### resolveLocalFileSystemURL[¶](#resolveLocalFileSystemURL)

#### Request[¶](#Request)

    JSON: Object
    { id : 2
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.resolveLocalFileSystemURL" 
    , params : { url : "webinos:http://travelapp.webinos.org/persistent/italy.route" }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 2
    , jsonrpc: "2.0" 
    , result: <Entry>
    }

### getMetadata[¶](#getMetadata)

#### Request[¶](#Request)

    JSON: Object
    { id : 3
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.getMetadata" 
    , params : { entry : <Entry> }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 3
    , jsonrpc: "2.0" 
    , result:
      { modificationTime : "2012-01-01T12:00:00.000Z" 
      , size : 1024
      }
    }

### moveTo[¶](#moveTo)

#### Request[¶](#Request)

    JSON: Object
    { id : 4
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.moveTo" 
    , params :
      { source : <Entry>
      , parent : <Entry>
      , newName : "newx" 
      }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 4
    , jsonrpc: "2.0" 
    , result: <Entry>
    }

### copyTo[¶](#copyTo)

#### Request[¶](#Request)

    JSON: Object
    { id : 5
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.copyTo" 
    , params :
      { source : <Entry>
      , parent : <Entry>
      , newName : "newx" 
      }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 5
    , jsonrpc: "2.0" 
    , result: <Entry>
    }

### remove[¶](#remove)

#### Request[¶](#Request)

    JSON: Object
    { id : 6
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.remove" 
    , params : { entry : <Entry> }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 6
    , jsonrpc: "2.0" 
    , result: null
    }

### getParent[¶](#getParent)

#### Request[¶](#Request)

    JSON: Object
    { id : 7
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.getParent" 
    , params : { entry : <Entry> }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 7
    , jsonrpc: "2.0" 
    , result: <Entry>
    }

### getFile[¶](#getFile)

#### Request[¶](#Request)

The `params` include `options` which specify if the requested file
should be created (`create`), and if the creation should be `exclusive`.

    JSON: Object
    { id : 8
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.getFile" 
    , params :
      { entry : <Entry>
      , path : "bar" 
      , options :
        { create : true
        , exclusive : false
        }
      }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 8
    , jsonrpc: "2.0" 
    , result: <Entry>
    }

### read[¶](#read)

*Not yet specified.* This will include setting up a channel for pausable
reading.

### write[¶](#write)

*Not yet specified.* This will include setting up a channel for chunked
writing.

### truncate[¶](#truncate)

#### Request[¶](#Request)

    JSON: Object
    { id : 11
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.truncate" 
    , params :
      { entry : <Entry>
      , size : 0
      }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 11
    , jsonrpc: "2.0" 
    , result: null
    }

### getDirectory[¶](#getDirectory)

#### Request[¶](#Request)

The `params` include `options` which specify if the requested directory
should be created (`create`), and if the creation should be `exclusive`.

    JSON: Object
    { id : 12
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.getDirectory" 
    , params :
      { entry : <Entry>
      , path : "bar" 
      , options :
        { create : true
        , exclusive : false
        }
      }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 12
    , jsonrpc: "2.0" 
    , result: <Entry>
    }

### removeRecursively[¶](#removeRecursively)

#### Request[¶](#Request)

    JSON: Object
    { id : 13
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.removeRecursively" 
    , params : { entry : <Entry> }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 13
    , jsonrpc: "2.0" 
    , result: null
    }

### readEntries[¶](#readEntries)

#### Request[¶](#Request)

    JSON: Object
    { id : 14
    , jsonrpc : "2.0" 
    , method : "http://webinos.org/api/file@<instance>.File.readEntries" 
    , params : { entry : <Entry> }
    }

#### Response[¶](#Response)

    JSON: Object
    { id: 14
    , jsonrpc: "2.0" 
    , result: [ <Entry>* ]
    }
