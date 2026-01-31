//I want to be able to create a KNN (Object/class)
class KNN
{
    constructor()
    {
        this.memoriesNumbers = {};
        //Calculate with numbers and then individual chances
        //Chances are for likelyhood to get 1 (not for 0)
        this.memoriesChances = {};

        //
        this.inputNumber = this.inputNumber;
        this.outputNumber = this.outputNumber;
    }

    //
    addMemory(inputMemory, expectedOutput)
    {
        //Add the memory to the number dictionary and increase the number by one
        this.memoriesNumbers[inputMemory] = (this.memoriesNumbers[inputMemory] | -1) + 1;
        //Add the memory to the chances dictionary and use calculateChances
        //Should instead of the just always 1 it not depend on if it should output a 1 or 0
        this.memoriesChances[inputMemory] = (calculateChances(this.memoriesNumbers[inputMemory],this.memoriesChances[inputMemory], expectedOutput) | calculateEmptyChances(expectedOutput));
    }

    //
    getOutput(inputMemory)
    {
        //Calculate distance for each memory from inputMemory
        //apply the activation function to the distance
        //(Calculate the chances with each distance after activation)
        //Sum up all according to their distances into one chance
        //Run that chance and return it
    }
}


function calculateChances(newMemoryNumber, currentMemoryChance, inputNumber)
{
    //Calculate chance by:
    //(correctNumbers / totalNumbers) * 100
    //
    //Calculate correctNumbers:
    //(currentChance/100)*totalNumbers
    //
    //New Chance:
    //((((currentChance/100)*(newMemoryNumber-1)) + or -1)/newMemoryNumber)*100

    let newCorrectNumber = ((currentMemoryChance / 100) * (newMemoryNumber - 1)) + inputNumber;
    let newMemoryChance = (newCorrectNumber / newMemoryNumber) * 100;

    return newMemoryChance;
}

function calculateEmptyChances(inputNumber)
{
    if(inputNumber == 1)
    {
        return 100;
    } else
    {
        return 0;
    }
}


//The KNN will have an input and output
//Input: String of if possibe only one char and otherwise multiple chars
//Output: 
// - Stream: One character at a time for each input one output char
// - Block: For each character the whole string of all outputs
//   -> Clear function is needed


//The KKN object should have an execute function with input as parameter

//Constructor variables:
// - 



//What needs to get saved:
// - Number of memories in one memory place
// - How many in each place 1 and how many 0
// -> Chances
// - Function to determine number of memories - what memory to choose (linear, exponential, ...)
//   -----> That has to be EXTREMELY efficient -> Should be O(1)



//Logic:
//Add memory:
//
//
//Get nearest memory:
//
//


//Look at all other methods again ---> Video: Other options: 

//what if eventually all have one memory???   ---> maybe make memory selection completely with chances and how many memories one memory place has



//the problem is if there is more than one bit then exponential different between memories??? : 0010 -> 0100

//-> Make it multiple dimensions?? but try to keep dimensionality minimal -> doesnt need to be kept minimal if only 1 and 0 or 1 and -1




//To make it really efficient -> Make on function out of it for just choosing 1 or 0
//-> then its just like a neural network


//memories as strings



module.exports = {
  KNN
};




console.log(calculateChances(101, 50, 1));