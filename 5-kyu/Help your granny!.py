def tour(friends, friend_towns, home_to_town_distances):

    d, last_distance = 0, 0

    friend_towns = [ (friend, town)  for (friend, town) in friend_towns if friend in friends]
    for friend, town in friend_towns:
        if friend not in friends: continue

        if town in home_to_town_distances :
            this_distance = home_to_town_distances[town]
            if d == 0:
                d += this_distance
                last_distance = this_distance
            else:
                if this_distance > last_distance:
                    d += (this_distance**2 - last_distance**2)**.5
                    last_distance = this_distance

    d += home_to_town_distances[town]
    
    return int(d)
