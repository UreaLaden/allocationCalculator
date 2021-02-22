const userIncome = document.getElementById('user_income');
userExpenses = document.getElementById('expenses');
userRevenue = document.getElementById('revenue');
profitPercent = document.getElementById('profit_percentage');
ownerPercent = document.getElementById('owner_percentage');
taxPercent = document.getElementById('tax_percentage');
opsPercent = document.getElementById('expense_percentage');
doubtPercent = document.getElementById('doubt_percentage');
allocationPercent = document.querySelector('#rev_percentage');
remainingAllocations = document.querySelector('#remaining_al');
resultsAmount =document.querySelector('#results_amount');
resultsProfit =document.querySelector('#r_profit');
resultsOwner =document.querySelector('#r_owner');
resultsTax =document.querySelector('#r_tax');
resultsExpenses =document.querySelector('#r_exp');
resultsDoubts =document.querySelector('#r_doubt');
remainingResults = document.querySelector('#remaining_res')
revenueHeader = document.getElementById('income');
allocationsHeader = document.getElementById('allocations');
resultsHeader = document.getElementById('results');


const updatePercentage = () =>{
    total = 100;
    allocationPercent.innerHTML = total - profitPercent.value - ownerPercent.value - 
        taxPercent.value - opsPercent.value - doubtPercent.value ;
    resultsAmount.innerText = (Number(allocationPercent.innerText) / 100) * userRevenue.value
}

const validatePercentage = () =>{
    if (Number(allocationPercent.innerText) < 100 && (Number(allocationPercent.innerText)) > 0){
        remainingAllocations.innerText = 'Remaining'
        allocationsHeader.className = 'header_open rounded-lg';
        };
        if (Number(allocationPercent.innerText) < 0){
            remainingAllocations.innerText = 'Must Total 100';
            allocationsHeader.className = 'header_broken rounded-lg';
            };
            if (Number(allocationPercent.innerText) === 100 ){
                remainingAllocations.innerText = 'Remaining'
                allocationsHeader.className = 'header_open rounded-lg';
                };
                if (Number(allocationPercent.innerText) === 0){
                    remainingAllocations.innerText = 'Allocated'
                    allocationsHeader.className = 'header_closed rounded-lg';
                    };
                    if(Number(resultsAmount.innerText) === 0 ){
                        remainingResults.innerText = 'Allocated';
                        resultsHeader.className = 'header_closed rounded-lg';
                        };
                        if(Number(resultsAmount.innerText) === 0 && Number(allocationPercent.innerText == 0)){
                            remainingResults.innerText = 'Allocated';
                            resultsHeader.className = 'header_closed rounded-lg';
                            };
                            if(Number(resultsAmount.innerText) != 0){
                                remainingResults.innerText = 'Remaining';
                                resultsHeader.className = 'header_open rounded-lg';
                                };
        };
// FIX THE COLORS 
// ADD RESET BUTTON
const reset = () =>{
    userRevenue.innerHTML = 0;
    userIncome.value = 0;
    userExpenses.value = 0;
    profitPercent.value = 0;
    ownerPercent.value = 0;
    taxPercent.value = 0;
    opsPercent.value = 0;
    doubtPercent.value = 0;
    resultsProfit.innerText = 0;
    resultsOwner.innerText = 0;
    resultsTax.innerText = 0;
    resultsExpenses.innerText = 0;
    resultsDoubts.innerText = 0;
    revenueHeader.className = 'header_open rounded-lg'
    allocationsHeader.className = 'header_open rounded-lg'
    resultsHeader.className = 'header_open rounded-lg'
    remainingAllocations.innerText = 'Remaining'
    remainingResults.innerText = 'Allocated';
    resultsAmount.innerText = 0;
    remainingResults.innerText = 'Remaining';
};



// ===========================================================
// ===========================INCOME==========================
// ===========================================================

userIncome.onchange = updateRevenue = ()=>{
    userRevenue.value = Number(userIncome.value) ;
    userRevenue.innerHTML = userRevenue.value ;
    revenueHeader.className = 'header_closed rounded-lg';
    validatePercentage();
};
 
userExpenses.onchange = updateExpense = () =>{
    userRevenue.innerHTML = (Number(userIncome.value) - Number(userExpenses.value));
    validatePercentage();
};

// ==============================================================
// ==============================================================



// ==============================================================
// ===================ALLOCATIONS================================
// ==============================================================

    

profitPercent.onchange = subtractProfit = () =>{
    updatePercentage();
    resultsProfit.innerText = (profitPercent.value / 100) * Number(userRevenue.innerHTML);
    validatePercentage();
};

ownerPercent.onchange = subractOwnerPay = () =>{
    updatePercentage();
    resultsOwner.innerText = (ownerPercent.value / 100) * Number(userRevenue.innerHTML);
    validatePercentage();
};

taxPercent.onchange = subtractTax = () =>{
    updatePercentage();
    resultsTax.innerText = (taxPercent.value / 100) * Number(userRevenue.innerHTML);
    validatePercentage();
};

opsPercent.onchange = subtractExpense = () =>{
    updatePercentage();
    resultsExpenses.innerText = (opsPercent.value / 100) * Number(userRevenue.innerHTML);
    validatePercentage();
}

doubtPercent.onchange = subtractDoubt = () =>{
    updatePercentage();
    resultsDoubts.innerText = (doubtPercent.value / 100) * Number(userRevenue.innerHTML);
    validatePercentage();
}

// ==============================================================
// ==============================================================

