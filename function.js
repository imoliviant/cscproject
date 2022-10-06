function mintCSC() {
    var amount1 = $("#amount1").val();
    var content = "Sending transaction from: ";
    content += cscChef;
    $("#lang1").html(content);
    var event = contractCSC.methods.batchMint(cscChef, amount1).send({ from: cscChef, value: 5000000000000000 * amount1 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            //alert("Done!");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang1").html(content);
        });;
  };

function supplyCSC() {
    var content = "";
    var event = contractCSC.methods.totalSupply().call({ from: cscChef })
        .then(function (result) {
            console.log(result);
    var content = "Already minted: ";
    content += result;
    $("#lang2").html(content);
    });
};
function wallet() {
    var content = "";
        var event = contractCSC.methods.balanceOf(cscChef).call({ from: cscChef })
        .then(function (result) {
    balance = result;
    for(var i = 0; i < balance; i++){
    var event = contractCSC.methods.tokenOfOwnerByIndex(cscChef, i).call({ from: cscChef })
        .then(function (result) {
    var event = contractCSC.methods.tokenURI(Number(result)).call()
        .then(function (result1) {
    content += "<br><br>Id: " + result;
    $("#lang7").html(content);
    });
    });
    };
    });
};
// for approving csc testnet nfts
function approveCSC() {
    var tokenId2 = $("#tokenId2").val();
    var content = "Approving transaction from: ";
    content += cscChef;
    $("#lang3").html(content);
    var event = contractCSC.methods.approve("0xbeF0f2A78d97E0Fa368Dd43cD479bB96D3dd8261", tokenId2).send({ from: cscChef })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: ";
            //alert("Done. You can stake it now!")
    content += JSON.stringify(receipt.transactionHash);
    $("#lang3").html(content);
        });;
};
// for staking csc testnet nfts
function stakeCSC() {
    var tokenIdA = $("#tokenIdA").val();
    var content = "Sending transaction from: ";
    content += cscChef;
    $("#lang4").html(content);
    var event = contractCSCStake.methods.stake(tokenIdA).send({ from: cscChef, value: 5000000000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            //alert("Done.");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang4").html(content);
        });;
};

function calculateReward() {
    var tokenId3 = $("#tokenId3").val();
    var event = contractCSCStake.methods.calculateTokens(tokenId3).call()
        .then(function (result) {
    var content = "USDT amount: ";
            //alert(result/100000000);
    content += JSON.stringify(result.toString()/1000000000000000000);
    $("#lang5").html(content);
        });;
};
// for unstaking csc nfts from smart contract on testnet
function unstakeCSC() {
    var tokenId4 = $("#tokenId4").val();
    var content = "Sending transaction from: ";
    content += cscChef;
    $("#lang6").html(content);
    var event = contractCSCStake.methods.unstake(tokenId4).send({ from: cscChef, value: 5000000000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! ";
            //alert("Done.");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang6").html(content);
        });;
};
