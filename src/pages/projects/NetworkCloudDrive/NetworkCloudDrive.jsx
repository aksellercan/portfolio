export default function NetworkCloudDrive() {
    return <div className="globalUpperDiv">
        <div className="globalPositionDiv">
            <a href={import.meta.env.VITE_NCD_DOCS_LINK}>Java Docs</a>
            <h1>Network Cloud Drive</h1>
            <p>Network Cloud Drive is a locally hosted file system. API is made to be very customizable and easy to host.</p>
            <br></br>
            <h3>There are three ways to host:</h3>
            <ul>
                <li>Using Docker</li>
                <li>Using Artifacts from github actions</li>
                <li>Compiling yourself</li>
            </ul>

            <h3>Next Features</h3>
            <ul>
                <li>Recycle bin feature</li>
                <p id="subTextP">- Currently files get deleted permanently. Frontend implements confirmation.</p>
                <li>Compression and uncompression actions</li>
                <p id="subTextP">- Will allow to download whole folders, allow to upload zip files and uncompress them on API</p>
                <li>Temporary Redis Database</li>
                <p id="subTextP">- This is mostly for having a way to see bakground tasks like maintenance scan results</p>
            </ul>

            <h3>Current Development</h3>
            <p>Currently refactoring the entire API to use more of Springboot features such as:</p>
            <ul>
                <li>Advices</li>
                <li>Scheduling</li>
                <li>Caching <span>(very basic one is already on master)</span></li>
                <li>Paging <span>(some endpoints already have it on master)</span></li>
            </ul>

            <p>Other improvements are on path handling. Currently paths are accessed via "id". Since folder names and places can change to avoid double action on each move operation, paths are represented as id paths Ex. "0/3/1/4". This works but has an issue with enough nesting using huge numbers it will vventually reach character limit of VARCHAR. I can use more storage for VARCHAR but thats not good.</p>
            <br></br>
            <p>New path system adds "parent id" property. Which uses a similiar way to resolve the path but I no longer need to use String manuplation, It's all done by a simple loop now.</p>
            <br></br>
            <pre>
                <code className="language-java">{`public String imperativePathResolver(long folderId) {
    LinkedList<String> path = new LinkedList<>();
    FolderMetadata currentFolder;
    long nextId = folderId;

    do {
        currentFolder = sqLiteDAO.queryFolderMetadata(nextId, userSession.getId());
        nextId = currentFolder.getParentFolderId();
        String encodeFolderName = encodingUtility.unifiedEncodeBase64(currentFolder);
        path.add(encodeFolderName);
    } while (nextId > 0);

    path.add(encodingUtility.encodeBase32UserFolderName(
            userSession.getId(),
            userSession.getName(),
            userSession.getMail()));

    return batchPaths(path);
}`}</code>
            </pre>

            <br></br>
            <h3>All Available Configurations Currently</h3>
            <pre><code>{`
                    ## DEFAULTS
                    # API Settings
                    spring.application.name=NetworkCloudDrive
                    server.port=8080
                    environment.unit-test=false
                    # Security
                    use-http-basic-authentication=false
                    disable-csrf-protection=false
                    # CORS Example
                    #cors-allowed-origins-patterns="http://localhost:3000","http://192.168.1.*:3000","http://localhost:5173","http://192.168.1.*:5173"
                    #cors-allowed-headers="Origin","Content-Type","Accept","responseType","Authorization"
                    #cors-allowed-methods="GET","POST","PUT","OPTIONS","DELETE"
                    #cors-exposed-headers="Content-Disposition","Content-Length"
                    #cors-allow-credentials=true
                    #cors-maximum-age=3600
                    # Logging
                    logging.file.path=logs
                    #debug=true
                    # SQLite Settings
                    spring.jpa.database-platform=org.hibernate.community.dialect.SQLiteDialect
                    spring.jpa.hibernate.ddl-auto=update
                    # Upload limits (Example)
                    #Max size of single file upload
                    spring.servlet.multipart.max-file-size=500MB
                    #Max total size of the request
                    spring.servlet.multipart.max-request-size=500MB
                    #Max amount of files
                    server.tomcat.max-part-count=100
                    #API Endpoint Configuration
                    api-supported-versions="1.0","2.0","3.0"
                    api-default-version="1.0"
                    #API Encoding settings
                    encode-randomize-string-alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    encode-randomize-string-size=3
                    #API Thread pool Settings
                    thread-set-core-pool-size=5
                    thread-set-max-pool-size=10
                    thread-set-queue-capacity=100
                    thread-set-name-prefix="async-worker-"
                    #API Root path
                    storage-root-path="./root"`}</code></pre>
        </div>
    </div >
}