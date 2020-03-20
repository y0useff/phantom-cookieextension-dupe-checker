# phantom-cookieextension-dupe-checker
checks for duplicate cookies extracted from the phantom cookie harvester

HOW TO USE

only follow these steps if you are on windows, if you are on mac it will still work, but the setup will be different.

install node.js https://nodejs.org/en/download/

Extract folder contents into separate folder, copy folder path, e.g. C:\Users\Yousef\Desktop\Profiles-Tasks\Cookies

if on windows, open command prompt, enter "cd (insert folder path here)", hit enter

extract cookies from phantom, rename it "pre-checked.json", or copy the file contents into "pre-checked.json"

go back to command prompt, write "node index.js", hit enter

all duplicate cookies will now be deleted, import "checked-cookies.json" into your phantom

