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
    
      switch(level)
        {
            case 1:
                hd="1+1";
                break;
                
            case 2:
                hd="2";
                break;
                
            case 3:
                hd="3";
                break;
                
            case 4:
                hd="4";
                break;
                
            case 5:
                hd="5";
                break;
                
            case 6:
                hd="6";
                break;
                
            case 7:
                hd="7";
                break;
                
            case 8:
                hd="8";
                break;
                
            case 9:
                hd="9";
                break;
                
            case 10:
                hd="10";
                break;
                
            default:
                hd="---";
        }
    
    return hd;
                
}