/*HitPoints randomly generate hit points*/

function getHitPoints (level, conMod)
{
    let hitPoints = 1;
    
    let hitDice = level;
    
    let counter = 0;
            
    for(;counter < hitDice; counter++)
            {

                let hpEachLevel = 0;
                hpEachLevel = Math.floor((Math.random() * 6) + 1) + conMod;

                if(hpEachLevel < 3)
                    {
                        hpEachLevel = 3;
                    }

                hitPoints += hpEachLevel;
            }

    
    return hitPoints;
    
}

function getHitDiceAmount (level)
{
    let hd = "-";
    
    if(level == 1)
        {
            hd = "1+1";
        }
    else if(level == 2)
        {
            hd = "2";
        }
    else if(level == 3)
        {
            hd = "3";
        }
    else if(level == 4)
        {
            hd = "4";
        }
    else if(level == 5)
        {
            hd = "5";
        }
    else if(level == 6)
        {
            hd = "6";
        }
    else if(level == 7)
        {
            hd = "7";
        }
    else if(level == 8)
        {
            hd = "8";
        }
    else if(level == 9)
        {
            hd = "9";
        }
    else if(level == 10)
        {
            hd = "10";
        }
    
    return hd;
                
}