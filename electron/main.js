const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

const main_menu = [
    {
        label: 'Сервис',
        submenu: [
            {
                role: 'quit',
                label: 'Выход'
            },
            {role: 'toggleDevTools'},
            {type: 'separator'}
        ]
    }
]

app.disableHardwareAcceleration()
app.whenReady().then(() => {
    let win = new BrowserWindow({
        show: false,
        useContentSize: true,
        minimizable: false,
        title: 'Progress GUI',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false
        },
        icon: 'Assets/img/logo_horizontal.png'
    })


    const startUrl = process.env.ELECTRON_START_URL || new url.URL(path.join(__dirname, '../index.html'), 'file:')
    win.loadURL(startUrl).then(r => {
        console.log("Startup Log: ",r)
        win.webContents.setFrameRate(60)
        win.maximize()
        win.show()
    });
})

const menu = Menu.buildFromTemplate(main_menu)
Menu.setApplicationMenu(menu)

app.on('window-all-closed', () => {
    app.quit()
})
