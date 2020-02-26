def generate_bc(url, separator):
    if '//' in url:
        url = url[url.index('//') + 2:]

    url = url.rstrip('/')

    try:
        for i, c in enumerate(url):
            if c in ['?', '#']:
                url = url[0:i]
                break

        menus = url.split('/')[1:]
        if menus and 'index.' == menus[-1][0:6]:
            menus = menus[:-1]
        if not menus:
            return '<span class="active">HOME</span>'

        breadcrumb = '<a href="/">HOME</a>'

        for i, e in enumerate(menus[:-1]):
            breadcrumb += separator + '<a href="/{}/">{}</a>'.format('/'.join(menus[:i + 1]), get_element_name(e))

        breadcrumb += separator + '<span class="active">{}</span>'.format(get_element_name(menus[-1]))
        return breadcrumb
    except:
        return url


ignore_words = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"]


def get_element_name(element):
    acronyms = element.split('-')
    for i, c in enumerate(acronyms[-1]):
        if c == '.':
            acronyms[-1] = acronyms[-1][:i]
            break

    if len(element) > 30:
        for i, c in reversed(list(enumerate(acronyms))):
            if c in ignore_words:
                acronyms.pop(i)
        return ''.join([s[0].upper() for s in acronyms])

    return ' '.join([s.upper() for s in acronyms])
