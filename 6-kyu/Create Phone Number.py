from string import Template

def create_phone_number(n):
    return Template('($a$b$c) $d$e$f-$g$h$i$j').substitute(a=n[0],b=n[1],c=n[2],d=n[3],e=n[4],f=n[5],g=n[6],h=n[7],i=n[8],j=n[9])
