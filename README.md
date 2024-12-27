````markdown
# Big Aunt Record

**Big Aunt Record** is a WeChat Mini Program that helps users track and record their **big aunt** (menstrual) cycles.

## Project Overview

- **Project Name:** bigAuntRecord  
- **Main Features:**  
  1. Record the start date, end date, and notes (mood, symptoms, etc.) for each **big aunt**.  
  2. View a history of all previous **big aunt** records.  
  3. Calculate the duration of the most recent **big aunt** cycle.  

## Directory Structure

```bash
.
├── README.md                   # Project Description
├── project.config.json         # WeChat DevTools config
├── project.private.config.json # WeChat DevTools private config (overrides public config)
├── .eslintrc.js                # ESLint config (optional)
├── miniprogram
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   └── pages
│       ├── home
│       │   ├── home.json
│       │   ├── home.wxml
│       │   ├── home.wxss
│       │   └── home.js
│       ├── record
│       │   ├── record.json
│       │   ├── record.wxml
│       │   ├── record.wxss
│       │   └── record.js
│       └── history
│           ├── history.json
│           ├── history.wxml
│           ├── history.wxss
│           └── history.js
```

## How to Use

1. **Prerequisites**  
   - [WeChat DevTools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)  
   - A registered WeChat Mini Program **AppID** (if you need real-device preview or official publishing)

2. **Import the Project**  
   - Open WeChat DevTools and choose **“Import Project”**  
   - Select this project folder (where `project.config.json` is located)  
   - DevTools will automatically load the settings in `project.config.json` and `project.private.config.json`  

3. **Local Storage**  
   - This Mini Program uses `wx.getStorageSync` and `wx.setStorageSync` to store **big aunt** records locally  
   - The local storage key is `bigAuntHistory`, which holds an array of record objects

4. **Page Features**  
   1. **Home**  
      - Displays the latest **big aunt** record details (start, end, duration)  
      - Links to **Record** and **History** pages  
   2. **Record**  
      - Allows users to select start date, end date, and notes  
      - Saves new records to local storage  
   3. **History**  
      - Retrieves and displays all **big aunt** records from local storage in descending order by date

5. **Configuration**  
   - To rename the project, change `"projectname"` in `project.config.json` or `project.private.config.json`  
   - If you have your own AppID, update the `"appid"` in `project.config.json` with your actual AppID  

6. **Further Enhancements**  
   - Integrate WeChat Cloud Development for multi-device data synchronization  
   - Implement **big aunt** predictions, notifications, additional data fields (weight, mood, body temperature, etc.)

7. **FAQ**  
   - **Data Loss**: Data is stored locally. Changing devices or clearing the Mini Program cache will remove data. Use Cloud Development for persistent storage.  
   - **Unable to Debug on Real Device**: Ensure you have a valid AppID and have added your WeChat developer account in the WeChat Official Platform.

## License

This project is intended for personal, learning, or demo use. For commercial applications, please follow the relevant laws and include proper attributions.
```
