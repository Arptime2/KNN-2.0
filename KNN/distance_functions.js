function calculateMemoryDistance(memory1, memory2)
{
    //Calculate how different the two strings are (they should be same length always)
    let distance = 0;

    for (let i in memory1)
    {
        if(memory1[i] != memory2[i])
        {
            distance += 1;
        }
    }

    return distance;
}

console.log(calculateMemoryDistance("1100110","1100010"));


module.exports = {
  calculateMemoryDistance
};