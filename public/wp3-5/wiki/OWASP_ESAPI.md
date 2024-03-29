ESAPI OWASP top 10 coverage[¶](#ESAPI-OWASP-top-10-coverage)
============================================================

A1 Injection[¶](#A1-Injection)
------------------------------

### Encoder[¶](#Encoder)

Contains a number of methods for decoding input and encoding output so
that it will be safe for a variety of interpreters. Validator
implementations should call canonicalize on user input before validating
to prevent encoded attacks.

    java.lang.String canonicalize(java.lang.String input, boolean restrictMultiple, boolean restrictMixed)
        Canonicalization is simply the operation of reducing a possibly encoded string down to its simplest form.
        Parameters:
            input - the text to canonicalize
            restrictMultiple - true if checking for multiple encoding is desired, false otherwise
            restrictMixed - true if checking for mixed encoding is desired, false otherwise 
        Returns:
            a String containing the canonicalized text

All of the methods must use a "whitelist" or "positive" security model.
For the encoding methods, this means that all characters should be
encoded, except for a specific list of "immune" characters that are
known to be safe.\
Encoding and decoding functions rely on a set of codecs that can be
found in the org.owasp.esapi.codecs package. These include: CSS
Escaping, HTMLEntity Encoding, JavaScript Escaping, MySQL Escaping,
Oracle Escaping, Percent Encoding (aka URL Encoding), Unix Escaping,
VBScript Escaping, Windows Encoding.

    java.lang.String encodeForCSS(java.lang.String input)

    java.lang.String encodeForHTML(java.lang.String input)
    java.lang.String decodeForHTML(java.lang.String input)

    java.lang.String encodeForBase64(byte[] input, boolean wrap)
    byte[] decodeFromBase64(java.lang.String input)

    java.lang.String encodeForURL(java.lang.String input)
    java.lang.String decodeFromURL(java.lang.String input)

    java.lang.String encodeForHTMLAttribute(java.lang.String input)

    java.lang.String encodeForJavaScript(java.lang.String input)

    java.lang.String encodeForOS(Codec codec, java.lang.String input)
        Encode for an operating system command shell according to the selected codec (appropriate codecs include the WindowsCodec and UnixCodec).

    java.lang.String encodeForSQL(Codec codec, java.lang.String input)
        Encode input for use in a SQL query, according to the selected codec (appropriate codecs include the MySQLCodec and OracleCodec).

    java.lang.String encodeForXML(java.lang.String input)

    java.lang.String encodeForXMLAttribute(java.lang.String input)

    java.lang.String encodeForXPath(java.lang.String input)

### Validator[¶](#Validator)

Defines a set of methods for canonicalizing and validating untrusted
input.

    Parameters:
        context - A descriptive name of the parameter that you are validating (e.g., LoginPage_UsernameField). This value is used by any logging or error handling that is done with respect to the value passed in.
        input - The actual user input data to validate.
        format - Required formatting of date inputted.
        type - The regular expression name that maps to the actual regular expression from "ESAPI.properties".
        maxLength - The maximum post-canonicalized String length allowed.
        allowNull - If allowNull is true then an input that is NULL or an empty string will be legal. If allowNull is false then NULL or an empty String will throw a ValidationException. 

    errorList captures ValidationExceptions

    java.lang.String getValidCreditCard(java.lang.String context, java.lang.String input, boolean allowNull, ValidationErrorList errorList)

    java.util.Date getValidDate(java.lang.String context, java.lang.String input, java.text.DateFormat format, boolean allowNull, ValidationErrorList errorList)

    java.lang.String getValidDirectoryPath(java.lang.String context, java.lang.String input, java.io.File parent, boolean allowNull, ValidationErrorList errorList)

    java.lang.Double getValidDouble(java.lang.String context, java.lang.String input, double minValue, double maxValue, boolean allowNull, ValidationErrorList errorList)

    byte[] getValidFileContent(java.lang.String context, byte[] input, int maxBytes, boolean allowNull, ValidationErrorList errorList)

    java.lang.String getValidFileName(java.lang.String context, java.lang.String input, java.util.List<java.lang.String> allowedExtensions, boolean allowNull, ValidationErrorList errorList)

    java.lang.String getValidInput(java.lang.String context, java.lang.String input, java.lang.String type, int maxLength, boolean allowNull, ValidationErrorList errorList)

    java.lang.Integer getValidInteger(java.lang.String context, java.lang.String input, int minValue, int maxValue, boolean allowNull, ValidationErrorList errorList)

    java.lang.String getValidListItem(java.lang.String context, java.lang.String input, java.util.List<java.lang.String> list, ValidationErrorList errorList)

    java.lang.Double getValidNumber(java.lang.String context, java.lang.String input, long minValue, long maxValue, boolean allowNull, ValidationErrorList errorList)

    java.lang.String getValidPrintable(java.lang.String context, java.lang.String input, int maxLength, boolean allowNull, ValidationErrorList errorList)

    java.lang.String getValidRedirectLocation(java.lang.String context, java.lang.String input, boolean allowNull, ValidationErrorList errorList)

    java.lang.String getValidSafeHTML(java.lang.String context, java.lang.String input, int maxLength, boolean allowNull, ValidationErrorList errorList)

A2 Cross site scripting (XSS)[¶](#A2-Cross-site-scripting-XSS)
--------------------------------------------------------------

### Encoder and Validator[¶](#Encoder-and-Validator)

See A1.

A3 Broken authentication and sessions[¶](#A3-Broken-authentication-and-sessions)
--------------------------------------------------------------------------------

### Authenticator[¶](#Authenticator)

Defines a set of methods for generating and handling account credentials
and session identifiers.\
One possible implementation relies on the use of a thread local variable
to store the current user's identity. The application is responsible for
calling setCurrentUser as soon as possible after each HTTP request is
received. The value of getCurrentUser is used in several other places in
this API. This eliminates the need to pass a user object to methods
throughout the library. For example, all of the logging, access control,
and exception calls need access to the currently logged in user.

    User getCurrentUser()
        Returns the matching User object, or the Anonymous User if no match exists

    void setCurrentUser(User user)
        Sets the currently logged in User.

login method should be called for every HTTP request, to login the
current user either from the session of HTTP request. This method will
set the current user so that getCurrentUser will work properly.
Authenticates the user's credentials from the HttpServletRequest if
necessary, creates a session if necessary, and sets the user as the
current user.

    User login(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response)
               throws AuthenticationException
        Parameters:
            request - the current HTTP request
            response - the HTTP response 
        Returns:
            the User 
        Throws:
            AuthenticationException - if the credentials are not verified, or if the account is disabled, locked, expired, or timed out

    void logout()
        Logs out the current user. This is usually done by calling User.logout on the current User. 

### User[¶](#User)

Represents an application user or user account.\
A user account can be in one of several states. When first created, a
User should be disabled, not expired, and unlocked. To start using the
account, an administrator should enable the account. The account can be
locked for a number of reasons, most commonly because they have failed
login for too many times. Finally, the account can expire after the
expiration date has been reached. The User must be enabled, not expired,
and unlocked in order to pass authentication.

    void disable()
        Disable this user's account.

    void enable()
        Enable this user's account. 

    java.util.Date getExpirationTime()
        Returns the date that this user's account will expire. 

    boolean isEnabled()
        Checks if this user's account is currently enabled.

    boolean isExpired()
        Checks if this user's account is expired. 

    boolean isLocked()
        Checks if this user's account is locked.

    boolean isLoggedIn()
        Tests to see if the user is currently logged in. 

    void lock()
        Lock this user's account. 

    void unlock()
        Unlock this user's account. 

    void logout()
        Logout this user. 

    void setExpirationTime(java.util.Date expirationTime)
        Sets the date and time when this user's account will expire. 

### HTTPUtilities[¶](#HTTPUtilities)

Is a collection of methods that provide additional security related to
HTTP requests, responses, sessions, cookies, headers, and logging.

    void addCookie(javax.servlet.http.HttpServletResponse response, javax.servlet.http.Cookie cookie)
        Add a cookie to the response after ensuring that there are no encoded or illegal characters in the name and name and value. This method also sets the secure and HttpOnly flags on the cookie. 

    void addHeader(javax.servlet.http.HttpServletResponse response, java.lang.String name, java.lang.String value)
        Add a header to the response after ensuring that there are no encoded or illegal characters in the name and name and value.

    void assertSecureRequest(javax.servlet.http.HttpServletRequest request)
                             throws AccessControlException
        Ensures that the request uses both SSL and POST to protect any sensitive parameters in the querystring from being sniffed, logged, bookmarked, included in referer header, etc... This method should be called for any request that contains sensitive data from a web form.

    void assertSecureChannel(javax.servlet.http.HttpServletRequest request)
                             throws AccessControlException
        Ensures the use of SSL to protect any sensitive parameters in the request and any sensitive data in the response. This method should be called for any request that contains sensitive data from a web form or will result in sensitive data in the response page. 

    java.lang.String getCookie(javax.servlet.http.HttpServletRequest request, java.lang.String name)
                               throws ValidationException
        A safer replacement for getCookies() in HttpServletRequest that returns the canonicalized value of the named cookie after "global" validation against the general type defined in ESAPI.properties. This should not be considered a replacement for more specific validation. 

    javax.servlet.http.HttpServletRequest getCurrentRequest()
        Retrieves the current HttpServletRequest

    javax.servlet.http.HttpServletResponse getCurrentResponse()
        Retrieves the current HttpServletResponse 

    java.lang.String getHeader(javax.servlet.http.HttpServletRequest request, java.lang.String name)
                               throws ValidationException
        A safer replacement for getHeader() in HttpServletRequest that returns the canonicalized value of the named header after "global" validation against the general type defined in ESAPI.properties. This should not be considered a replacement for more specific validation. 

    void logHTTPRequest(javax.servlet.http.HttpServletRequest request, Logger logger, java.util.List parameterNamesToObfuscate)
        Format the Source IP address, URL, URL parameters, and all form parameters into a string suitable for the log file. The list of parameters to obfuscate should be specified in order to prevent sensitive information from being logged. If a null list is provided, then all parameters will be logged. If HTTP request logging is done in a central place, the parameterNamesToObfuscate could be made a configuration parameter. We include it here in case different parts of the application need to obfuscate different parameters.

    void setHeader(javax.servlet.http.HttpServletResponse response, java.lang.String name, java.lang.String value)
        Add a header to the response after ensuring that there are no encoded or illegal characters in the name and value.

    void setNoCacheHeaders(javax.servlet.http.HttpServletResponse response)
        Set headers to protect sensitive information against being cached in the browser. Developers should make this call for any HTTP responses that contain any sensitive data that should not be cached within the browser or any intermediate proxies or caches. Implementations should set headers for the expected browsers. The safest approach is to set all relevant headers to their most restrictive setting. These include:
         Cache-Control: no-store
         Cache-Control: no-cache
         Cache-Control: must-revalidate
         Expires: -1

A4 Insecure Direct Object Reference[¶](#A4-Insecure-Direct-Object-Reference)
----------------------------------------------------------------------------

### AccessReferenceMap[¶](#AccessReferenceMap)

Is used to map from a set of internal direct object references to a set
of indirect references that are safe to disclose publicly. This can be
used to help protect database keys, filenames, and other types of direct
object references.\
Indirect references are handled as strings, to facilitate their use in
HTML.

    ava.util.Iterator iterator()
        Get an iterator through the direct object references. No guarantee is made as to the order of items returned.

    <T> K getIndirectReference(T directReference)
        Get a safe indirect reference to use in place of a potentially sensitive direct object reference. Developers should use this call when building URL's, form fields, hidden fields, etc... to help protect their private implementation information.

    <T> T getDirectReference(K indirectReference)
                         throws AccessControlException
        Get the original direct object reference from an indirect reference. Developers should use this when they get an indirect reference from a request to translate it back into the real direct reference. If an invalid indirect reference is requested, then an AccessControlException is thrown. If a type is implied the requested object will be cast to that type, if the object is not of the requested type, a AccessControlException will be thrown to the caller.

    <T> K addDirectReference(T direct)
        Adds a direct reference to the AccessReferenceMap, then generates and returns an associated indirect reference.

    <T> K removeDirectReference(T direct)
                            throws AccessControlException
        Removes a direct reference and its associated indirect reference from the AccessReferenceMap.

    void update(java.util.Set directReferences)
        Updates the access reference map with a new set of direct references, maintaining any existing indirect references associated with items that are in the new list. New indirect references could be generated every time, but that might mess up anything that previously used an indirect reference, such as a URL parameter.

### AccessController[¶](#AccessController)

isAuthorizedForData, isAuthorizedForFile and isAuthorizedForFunction
methods can be called to check if the current user is authorized to
access the referenced data, file or function.

    boolean isAuthorizedForFunction(java.lang.String functionName)
        Checks if the current user is authorized to access the referenced function.

    boolean isAuthorizedForData(java.lang.String action, java.lang.Object data)
        Checks if the current user is authorized to access the referenced data, represented as an Object.

    boolean isAuthorizedForFile(java.lang.String filepath)
        Checks if the current user is authorized to access the referenced file.

A5 Cross Site Request Forgery (CSRF)[¶](#A5-Cross-Site-Request-Forgery-CSRF)
----------------------------------------------------------------------------

### USER (crsftoken)[¶](#USER-crsftoken)

Represents an application user or user account.\
Methods getCSRFToken and resetCSRFToken are used.\
CRSF token is used as a prevention against CSRF attacks. This token
should be added to all links and forms. The application should verify
that all requests contain the token, or they may have been generated by
a CSRF attack. It is generally best to perform the check in a
centralized location, either a filter or controller.

    java.lang.String getCSRFToken()
        Gets the CSRF token for this user's current sessions. 

    java.lang.String resetCSRFToken()
                throws AuthenticationException
        Returns a token to be used as a prevention against CSRF attacks.

verifyCSRFToken is a HTTPUtilities method.

    void verifyCSRFToken()
        Calls verifyCSRFToken with the current request.

    void verifyCSRFToken(javax.servlet.http.HttpServletRequest request)
                         throws IntrusionException
        Checks the CSRF token in the URL against the user's CSRF token and throws an IntrusionException if it is missing. 

### AccessReferenceMap[¶](#AccessReferenceMap)

Using random strings as indirect object references, makes it impossible
for an attacker to guess valid identifiers. So if per-user
AccessReferenceMaps are used, then request forgery (CSRF) attacks will
also be prevented.

A6 Security Misconfiguration[¶](#A6-Security-Misconfiguration)
--------------------------------------------------------------

Security hardening is a server side task, so ESAPI doesn't address this
problem.

A7 Insecure Cryptographic storage[¶](#A7-Insecure-Cryptographic-storage)
------------------------------------------------------------------------

### Encryptor[¶](#Encryptor)

Provides a set of methods for performing common encryption, random
number, and hashing operations.\
Encryptor.MasterKey and Encryptor.MasterSalt must be set before using
ESAPI encryption.

    java.lang.String hash(java.lang.String plaintext, java.lang.String salt, int iterations)
                          throws EncryptionException
        Returns a string representation of the hash of the provided plaintext and salt. The salt helps to protect against a rainbow table attack by mixing in some extra data with the plaintext. Some good choices for a salt might be an account name or some other string that is known to the application but not to an attacker. See this article for more information about hashing as it pertains to password schemes. 

    CipherText encrypt(PlainText plaintext)
        Encrypts the provided plaintext bytes using the cipher transformation specified by the property Encryptor.CipherTransformation and the master encryption key as specified by the property Encryptor.MasterKey as defined in the ESAPI.properties file.

    CipherText encrypt(javax.crypto.SecretKey key, PlainText plaintext)
                       throws EncryptionException
        Encrypts the provided plaintext bytes using the cipher transformation specified by the property Encryptor.CipherTransformation as defined in the ESAPI.properties file and the specified secret key.
        This method is similar to encrypt(PlainText) except that it permits a specific SecretKey to be used for encryption.

    PlainText decrypt(CipherText ciphertext)
                      throws EncryptionException
        Decrypts the provided CipherText using the information from it and the master encryption key as specified by the property Encryptor.MasterKey as defined in the ESAPI.properties file.

    PlainText decrypt(javax.crypto.SecretKey key, CipherText ciphertext)
                      throws EncryptionException
        Decrypts the provided CipherText using the information from it and the specified secret key.
        This decrypt method is similar to decrypt(CipherText) except that it allows decrypting with a secret key other than the master secret key.

    java.lang.String sign(java.lang.String data)
                          throws EncryptionException
        Create a digital signature for the provided data and return it in a string.
        Limitations: A new public/private key pair used for ESAPI 2.0 digital signatures with this method and verifySignature(String, String) are dynamically created when the default reference implementation class, JavaEncryptor is first created. Because this key pair is not persisted nor is the public key shared, this method and the corresponding verifySignature(String, String) can not be used with expected results across JVM instances. This limitation will be addressed in ESAPI 2.1.

    boolean verifySignature(java.lang.String signature, java.lang.String data)
        Verifies a digital signature (created with the sign method) and returns the boolean result.

    NOTE: There is a bash shell script provided with the standard ESAPI distribution called 'setMasterKey.sh' that will assist the user in setting Encryptor.MasterKey and Encryptor.MasterSalt properties. The script is in 'src/examples/scripts/setMasterKey.sh'. 

A8 Failure to restrict URL access[¶](#A8-Failure-to-restrict-URL-access)
------------------------------------------------------------------------

### AccessController[¶](#AccessController)

Defines a set of methods that can be used to enforce access control.
Provides access control for URLs, business functions, data, services,
and files.\
Needs to access the current User object (from
Authenticator.getCurrentUser()) to determine roles or permissions.\
e.g. isAuthorized method returns true if the AccessControlRule decides
that the operation should be allowed. Otherwise, it returns false.

see A4\

    boolean isAuthorized(java.lang.Object key, java.lang.Object runtimeParameter)
        isAuthorized executes the AccessControlRule that is identified by key and listed in the resources/ESAPI-AccessControlPolicy.xml file. It returns true if the AccessControlRule decides that the operation should be allowed. Otherwise, it returns false. Any exception thrown by the AccessControlRule must result in false. If key does not map to an AccessControlRule, then false is returned. Developers should call isAuthorized to control execution flow.
        Parameters:
            key - key maps to <AccessControlPolicy><AccessControlRules> <AccessControlRule name="key" 
            runtimeParameter - runtimeParameter can contain anything that the AccessControlRule needs from the runtime system. 
        Returns:
            Returns true if and only if the AccessControlRule specified by key exists and returned true. Otherwise returns false

A9 Insufficient Transport Layer Protection[¶](#A9-Insufficient-Transport-Layer-Protection)
------------------------------------------------------------------------------------------

### HTTPUtilities (secure cookie)[¶](#HTTPUtilities-secure-cookie)

encryptStateInCookie and decryptStateFromCookie are used to
encrypt/decrypt cookies to prevent data exposure.

SSL/TLS use is a server architectural decision, so it is not addressed
by ESAPI.

    java.util.Map<java.lang.String,java.lang.String> decryptStateFromCookie(javax.servlet.http.HttpServletRequest request)
                    throws EncryptionException
        Retrieves a map of data from a cookie encrypted with encryptStateInCookie(). 

    void encryptStateInCookie(javax.servlet.http.HttpServletResponse response, java.util.Map<java.lang.String,java.lang.String> cleartext)
                              throws EncryptionException
        Stores a Map of data in an encrypted cookie.

A10 Unvalid Redirects and Forwards[¶](#A10-Unvalid-Redirects-and-Forwards)
--------------------------------------------------------------------------

### SecurityWrapperResponse[¶](#SecurityWrapperResponse)

Overrides unsafe methods in the HttpServletResponse API with safe
versions.\
sendRedirect method generates a redirect response that can only be used
to redirect the browser to safe locations, as configured in the ESAPI
security configuration.\
This method does not rely on information contained within redirect
requests, and does not include sensitive information in a redirect.

    public void sendRedirect(java.lang.String location)
                      throws java.io.IOException
        This method generates a redirect response that can only be used to redirect the browser to safe locations, as configured in the ESAPI security configuration.

2007: A3 Malicious file execution[¶](#2007-A3-Malicious-file-execution)
-----------------------------------------------------------------------

### HTTPUtilities (upload)[¶](#HTTPUtilities-upload)

getFileUploads method must check the content to ensure that it is safe
before making a permanent copy on the local filesystem. Checks should
include length and content checks, possibly virus checking, and path and
name checks.

    java.util.List getFileUploads(javax.servlet.http.HttpServletRequest request, java.io.File destinationDir, java.util.List allowedExtensions)
                                  throws ValidationException
        Extract uploaded files from a multipart HTTP requests. Implementations must check the content to ensure that it is safe before making a permanent copy on the local filesystem. Checks should include length and content checks, possibly virus checking, and path and name checks.

2007: A6 - Information Leakage and Improper Error Handling[¶](#2007-A6-Information-Leakage-and-Improper-Error-Handling)
-----------------------------------------------------------------------------------------------------------------------

### EnterpriseSecurityException[¶](#EnterpriseSecurityException)

Is the base class for all security related exceptions.\
All EnterpriseSecurityExceptions have two messages, one for the user and
one for the log file. This way, a message can be shown to the user that
doesn't contain sensitive information or unnecessary implementation
details. Meanwhile, all the critical information can be included in the
exception so that it gets logged.

    Constructor:
    EnterpriseSecurityException(java.lang.String userMessage, java.lang.String logMessage)
              Creates a new instance of EnterpriseSecurityException.

### HTTPUtilities[¶](#HTTPUtilities)

logHTTPRequest method format the Source IP address, URL, URL parameters,
and all form parameters into a string suitable for the log file. The
list of parameters to obfuscate should be specified in order to prevent
sensitive information from being logged. If a null list is provided,
then all parameters will be logged.\
See A3

