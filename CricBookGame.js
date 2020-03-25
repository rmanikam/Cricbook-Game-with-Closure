function CricGame()
{

    let total = 0;
    let turns = 0;
    return function(input)
    {
        turns++;
        if(turns > 5)
        {
            return(` The final score is : ${total}`);

        }
        else
        {
        

            total = total + input;
            return(`${turns} - The current score is ${total}`);

        }


    }

};
    const playerone = CricGame();
    const playertwo = CricGame();
