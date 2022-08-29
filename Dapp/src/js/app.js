web3Provider = null;
contracts = {};
winnerID_ = null ;
WinnerCount__= null; 

url = "http://127.0.0.1:7545";
currentAccount = null;
owner = null;
$(function(){
    $(window).load(function(){
        init();
        
    });
});

function init() {
    // راه اندازی اولیه پروژه
    return initWeb3();
}

async function initWeb3() {
    const provider = await detectEthereumProvider()
    if (!provider) {
        // handle no provider
        alert('Please install and login to Metamask!');
        return;
    }

    // اتصال به شبکه بلاکچین
    if(typeof web3 !== 'undefined') {
        // یک اتصال فعال به بلاکچین وجود دارد
        web3Provider = provider;
    } else {
        web3Provider = new Web3.providers.HttpProvider(url);
    }

    web3 = new Web3(web3Provider);

    ethereum.on('accountsChanged', handleAccountChanged);
    ethereum.on('chainChanged', handleChainChanged);

    // ست کردن اکانت پیش فرض
    handleAccountChanged();

    // پر کردن آدرس اکانت ها
    populateAddresses();

    return initContract();
}

function handleAccountChanged() {
    ethereum.request({method: 'eth_requestAccounts'}).then(function(accounts) {
        currentAccount = accounts[0];
        web3.eth.defaultAccount = currentAccount;
        setCurrentAccount();
        console.log('Account Changed: ', currentAccount);
    });
}

async function handleChainChanged() {
    // رفرش کردن صفحه
    window.location.reload();
}

function setCurrentAccount() {
    $('#current_account').text("Current Account: " + currentAccount);
}

function populateAddresses() {
    // اگر از وب3 موجود استفاده کنیم فقط اکانت کانکت شده به سایت را نشان خواهد داد
    web3 = new Web3(new Web3.providers.HttpProvider(url));
    web3.eth.getAccounts(function(err, accounts){
        //console.log(accounts);
        jQuery.each(accounts, function(idx){
            //console.log(accounts[idx]);
            var tag = '<option value="' + accounts[idx] + '">' + accounts[idx] + '</option>';

            $('#enter_address').append(tag);
            $('#enter_buy_address').append(tag);
        });
    });
}


function initContract() {
    $.getJSON('Ballot.json', function(artifact){
        var lottoryArtifact = artifact;
        contracts.Ballot = TruffleContract(lottoryArtifact);
        contracts.Ballot.setProvider(web3Provider);
    }).then(function(){
        _show_chairPerson();
        getOwner();
        setCurrentAccount();
    });
    
    return bindEvents();
}



function bindEvents() {
    $(document).on('click', '#click_handler', _register);
    $(document).on('click', '#click_vote', _vote);
    $(document).on('click', '#click_Count', _Count);


}


function _show_chairPerson() {
    // console.log("result is :");
    var lottoryInstance;
    contracts.Ballot.deployed().then(function(instance){
        // console.log("result is :1212");
        lottoryInstance = instance;
        return lottoryInstance.chairPerson();
    }).then(function(result){
        // console.log("result is :", result);
        $('#chairPerson').text( result);
    });
}


function validate(){
    var email = $('#Regisre').val();
    console.log(email)
    var regx = /^0x[a-fA-F0-9]{40}$/;
    if(regx.test(email)){
       alert("You have provided a valid address")
       return true
    }
    else{
       alert("Sorry, incorrect address");
       location.reload();
       return false;
    }
}


function  _vote() {
    var lottoryInstance;
    contracts.Ballot.deployed().then(function(instance){
        lottoryInstance = instance;
        var num2= lottoryInstance.chairPerson();
        var voter_id = $('#voteid').val();
        // var num3 =lottoryInstance.proposals[voter_id].voteCount();
        var txObj={

            from : currentAccount,

            gas : 500000
    }
    // console.log("account iiiiii : ",currentAccount);
    return lottoryInstance.vote_(voter_id,txObj);
    }).then(function(result){
    console.log("result is :", result);
    
})};

function getOwner() {
    var lottoryInstance;
    contracts.Ballot.deployed().then(function(instance){
        lottoryInstance = instance;
        return lottoryInstance.get_probNumber();
    }).then(function(result){
        $('#Countid2').text( result);
        console.log("number of proposal : " , result)
    });
}

function getwinerid() {
    var lottoryInstance;
    contracts.Ballot.deployed().then(function(instance){
        lottoryInstance = instance;
        return lottoryInstance.get_winnerID();
    }).then(function(result){
        console.log(result);
        $('#ttt').text( result);
        return result;
        // $('#Countid2').text( result);
        // console.log("number of proposal : " , result)
    });
}

function getwinercount() {
    var lottoryInstance;
    contracts.Ballot.deployed().then(function(instance){
        lottoryInstance = instance;
        return lottoryInstance.get_WinnerCount();
    }).then(function(result){
        console.log(result);
        getwinerid();
        $('#tttt').text( result);
        
        return result;
        // $('#Countid2').text( result);
        // console.log("number of proposal : " , result)
    });
}


function  _Count() {
    var lottoryInstance;
    contracts.Ballot.deployed().then(function(instance){
        lottoryInstance = instance;
        var num2= lottoryInstance.chairPerson();
        var txObj={

            from : currentAccount,

            gas : 500000
    }
    // console.log("account iiiiii : ",currentAccount);
    return lottoryInstance.count(txObj);
    }).then(function(result){
        
        getwinercount();
        console.log(result);
        
        return result;

        

    
})};

function  _register() {
    var lottoryInstance;
    contracts.Ballot.deployed().then(function(instance){
        lottoryInstance = instance;
        // var num2= lottoryInstance.chairPerson();
        var num1 = $('#Regisre').val();
        // var num3 =lottoryInstance.nuuum();
        var txObj={

            from : currentAccount,

            gas : 500000
    }
    // console.log(num1);
    // console.log("nuuum",num3);
    if(validate()){
        var result=lottoryInstance.register(num1,txObj);
        console.log("success!:" ,result);
     
        return result;
        
        
    };

})
}
