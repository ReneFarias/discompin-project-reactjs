/**
 * getFolders()
 * saveFolders()
 * savePinInFolder()
 */
const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`
}

/*export const saveFolders = async () => {
    localStorage.setItem('folders', JSON.stringify(folders));
}*/

export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders')) || []
}


export const saveFolder = async (folderName) => {
    /**Passos
     *  Pegar lista/array de pastas -> getFolders()
     *  Adicionar a pasta dentro desse array
     *  Salvar novamente no localStorage
     */

    
    const folders = await getFolders();

    const newFolder = {
        id: generateId(),
        name: folderName,
        pins: []
    };

    folders.push(newFolder);

    console.log('folders', folders)

    await saveFolders(folders);

    return newFolder

}

const saveFolders = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders));
}

export const savePinInFolder = async (folderId, pinId) => {
    /**
     * Listar coleção/array de pastas do storage
     * Encontrar a pasta que queremos adicionar o Pin
     * Adicionar o pinId na pasta
     * salvar pastas no storage novamente
     */

    const folders = await getFolders();

    const folderIndex = folders.findIndex(function(folder) {
        return folder.id === folderId;
    });

    if (folderIndex !== -1) {
        folders[folderIndex].pins.push(pinId);
    }

    await saveFolders(folders);

    return {...folders[folderIndex]};
}

export const getPins = async () => {
    return [
        {
          id: '123',
          title: 'Trigonometria',
          image: 'https://picsum.photos/200/300?53',
          total: 0
        },
        {
          id: '133',
          title: 'Javascript',
          image: 'https://picsum.photos/200/300?13',
          total: 0
        },
        {
          id: '134',
          title: 'React JS',
          image: 'https://picsum.photos/200/300?52',
          total: 0
        },
      ]
}