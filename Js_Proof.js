let nftFolder = [];

function mintNFT(name_input, description_input, owner_input){
    const nft_object = {
        name: name_input,
        description: description_input,
        owner: owner_input
    };
    
    nftFolder.push(nft_object);
    console.log("Currently accessed NFT: " + name_input);
}

function listNFTs(){

    for (let i = 0; i < nftFolder.length; i++){
        const nft = nftFolder[i];
        console.log("NFT : " + (i + 1));
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Owner: " + nft.owner);
    }
}

// Calling all the required functions

mintNFT("First", "This is my first NFT which is gonna rise soon..", "Metacrafter_1");
mintNFT("Second", "OK, so I thought of creating another one.", "Metacrafter_2");
mintNFT("Third", "Why not a third one as well? Here we go again", "Metacrafter_3");

listNFTs();


// Printing the total number of NFTs

function getTotalSupply(){
    return nftFolder.length;
}
console.log("Total Supply: " + getTotalSupply());