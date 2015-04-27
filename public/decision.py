__author__ = 'ian'

import random

def predict_survival(age,gender, ticket_class):
    if age <= 32.1447:
        if age <= 6.5000:
            if age <= 2.5000:
                if random.randint(1, 45) <= 35:
                    print("Dead")
                    return False
                else:
                    print("Alive")
                    return True
                #[35, 10]
            else:
                if random.randint(1, 30) <= 21:
                    print("Dead")
                    return False
                else:
                    print("Alive")
                    return True
                #[21, 9]
        else:
            if age <= 30.5000:
                if random.randint(1, 379) <= 207:
                    print("Dead")
                    return False
                else:
                    print("Alive")
                    return True
                #[207, 172]
            else:
                if random.randint(1, 71) <= 27:
                    print("Dead")
                    return False
                else:
                    print("Alive")
                    return True
                #[27, 44]
    else:
        if age <= 56.5000:
            if ticket_class >= 2:
                if random.randint(1, 664) <= 404:
                    print("Dead")
                    return False
                else:
                    print("Alive")
                    return True
                #[404, 262]
            else:
                if random.randint(1, 223) <= 154:
                    print("Dead")
                    return False
                else:
                    print("Alive")
                    return True
                #[154, 69]
        else:
            if ticket_class >= 3:
                if random.randint(1, 46) <= 35:
                    print("Dead")
                    return False
                else:
                    print("Alive")
                    return True
                #[35, 11]
            else:
                if random.randint(1, 10) <= 9:
                    print("Dead")
                    return False
                else:
                    print("Alive")
                    return True
                #[9, 1]