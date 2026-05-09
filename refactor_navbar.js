const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'app');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const navbarRegex = /import\s+Navbar(?:Punto|Impresa|Mepa|Agency)?\s+from\s+['"]@\/components\/(?:navbars\/)?Navbar(?:Punto|Impresa|Mepa|Agency)?['"];?/g;
const footerRegex = /import\s+Footer(?:Punto|Impresa|Mepa|Agency)?\s+from\s+['"]@\/components\/(?:footers\/)?Footer(?:Punto|Impresa|Mepa|Agency)?['"];?/g;
const navbarTagRegex = /<Navbar(?:Punto|Impresa|Mepa|Agency)?\s*\/?>(?:<\/Navbar(?:Punto|Impresa|Mepa|Agency)?>)?/g;
const footerTagRegex = /<Footer(?:Punto|Impresa|Mepa|Agency)?\s*\/?>(?:<\/Footer(?:Punto|Impresa|Mepa|Agency)?>)?/g;

walkDir(directoryPath, function(filePath) {
    if (filePath.endsWith('.tsx') && !filePath.includes('layout.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        content = content.replace(navbarRegex, '');
        content = content.replace(footerRegex, '');
        content = content.replace(navbarTagRegex, '');
        content = content.replace(footerTagRegex, '');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Modified: ${filePath}`);
        }
    } else if (filePath.endsWith('layout.tsx')) {
        // Also remove from vertical layouts
        if (filePath.includes('punto-zero') || filePath.includes('impresa-liquida') || filePath.includes('fatturato-garantito') || filePath.includes('agenzia-business')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;
            
            content = content.replace(navbarRegex, '');
            content = content.replace(footerRegex, '');
            content = content.replace(navbarTagRegex, '');
            content = content.replace(footerTagRegex, '');

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Modified layout: ${filePath}`);
            }
        }
    }
});
