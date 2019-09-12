# Input File Design

The create app script consumes data from a file to configure customization, social media urls and even the streaming url in the vue nativescript application.

## Structure

### name

+   **Details:** The name of the radio.
+   **Type:** `String`  

### sections

   **Details:** An array with the application sections. The sections can be "Live", "Schedule", "WriteUs", "Podcasts", "Social".
   **Type:** `Array`

### social

+   **Details:** An object with social media information.
+   **Type:** `Object`
+   **Structure:**
    +   **facebookUrl:** `String`
    +   **instagramUrl:** `String`
    +   **twitterUrl:** `String`

### colors

+   **Details:** An object with colors data.
+   **Type:** `Object`
+   **Structure:**
    +   **backgroundColor:**
        +   **Details:** The background color of the application
        +   **Type:** `String: hex color`
    +   **primaryText:**
        +   **Details:** The primary font color
        +   **Type:** `String: hex color`
    +   **secondaryText:**
        +   **Details:** The secondary font color
        +   **Type:** `String: hex color`

### bottomNavigationBar

+   **Details:** An object with data for the bottom navigation bar.
+   **Type:** `Object`
+   **Structure:**
    +   **activeColor:**
        +   **Details:** The color of the navigation bar icon when it's tapped.
        +   **Type:** `String: hex color`
    +   **inactiveColor:**
        +   **Details:** The color of the navigation bar icon when it's not tapped.
        +   **Type:** `String: hex color`
    +   **backgroundColor:**
        +   **Details:** The background color of the navigation bar
        +   **Type:** `String: hex color`

### contact

+   **Details:** An object with data related to contact the radio administrators.
+   **Type:** `Object`
+   **Structure:**
    +   **radioEmails:**
        +   **Details:** A list of emails to be send emails to.
        +   **Type:** `Array<String>`
    +   **whatsAppId:**
        +   **Details:** a telephone number associated to whatsapp.
        +   **Type:** `String`

### streamingUrl

+   **Details:** the url to the live streaming.
+   **Type:** `String`
