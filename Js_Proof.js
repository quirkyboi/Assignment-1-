let nftFolder = [];

// mintNFT function creates a new NFT that accepts user input as function parameters. 
function mintNFT(name_input, description_input, owner_input){

    //nft_object is an object that helps in creating a NFT which are capable of holding metadata like name, description and owner 
    const nft_object = {
        name: name_input,
        description: description_input,
        owner: owner_input
    };

    // after we have minted a NFT, it's time to add it in our nftFolder which is a collection of all NFTs
    nftFolder.push(nft_object);
    console.log("Currently accessed NFT: " + name_input);
}

// In order to iterate through all of our NFTs presnt in nftFolder, we use a function "listNFTs" and display all the necessary information
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
