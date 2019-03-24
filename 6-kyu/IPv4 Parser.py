def ipv4__parser(ip_addr, mask):
    ip_list = ip_addr.split('.')
    mask_list = mask.split('.')
    net_list = []
    host_list = []
    for i in xrange(4):
        net_list.append(str(int(ip_list[i]) & int(mask_list[i])))
        host_list.append(str(int(ip_list[i]) & ~int(mask_list[i])))
    net_addr = '.'.join(net_list)
    host_addr = '.'.join(host_list)
    return net_addr, host_addr
