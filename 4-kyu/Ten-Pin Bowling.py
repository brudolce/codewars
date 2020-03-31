def bowling_score(frames):
    
    frames = [list(r) for r in frames.split(' ')]
    
    points = 0
    
    for f in range(0, 8):
        if frames[f][0] == 'X':
            points += 10
            if frames[f+1][0] == 'X':
                points += 10
                if frames[f+2][0] == 'X':
                    points += 10
                else:
                    points += int(frames[f+2][0])
            elif frames[f+1][1] == '/':
                points += 10
            else:
                points += int(frames[f+1][0]) + int(frames[f+1][1])
        elif frames[f][1] == '/':
            points += 10
            if frames[f+1][0] == 'X':
                points += 10
            else:
                points += int(frames[f+1][0])
        else:
            points += int(frames[f][0]) + int(frames[f][1])
    
    if frames[8][0] == 'X':
        points += 10
        if frames[9][0] == 'X':
            points += 10
            if frames[9][1] == 'X':
                points += 10
            else:
                points += int(frames[9][1])
        elif frames[9][1] == '/':
            points += 10
        else:
            points += int(frames[9][0]) + int(frames[9][1])
    elif frames[8][1] == '/':
        points += 10
        if frames[9][0] == 'X':
            points += 10
        else:
            points += int(frames[9][0])
    else:
        points += int(frames[8][0]) + int(frames[8][1])
    
    if frames[9][0] == 'X':
        points += 10
        if frames[9][1] == 'X':
            points += 10
            if frames[9][2] == 'X':
                points += 10
            else:
                points += int(frames[9][2])
        elif frames[9][2] == '/':
            points += 10
        else:
            points += int(frames[9][1]) + int(frames[9][2])
    elif frames[9][1] == '/':
        points += 10
        if frames[9][2] == 'X':
            points += 10
        else:
            points += int(frames[9][2])
    else:
        points += int(frames[9][0]) + int(frames[9][1])
    
    return points
