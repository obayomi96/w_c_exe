# w_c_exe


To upload on fire fox, add the options below to configure your manifest.json

  ```
  "browser_specific_settings": {
    "gecko": {
      "id": "w_c_e@obayomi.com",
      "strict_min_version": "58.0"
    },
    "safari": {
      "strict_min_version": "14",
      "strict_max_version": "20"
    }
  }
  ```