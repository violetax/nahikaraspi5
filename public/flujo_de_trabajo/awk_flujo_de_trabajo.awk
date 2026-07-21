#!/usr/bin/awk -f

function hu_headit(filename, w, title,    weight)
{
    weight = w * 10

    print "---"             > filename
    print "title: \"" title "\"" > filename
    print "weight: " weight > filename
    print "---"             > filename
}

BEGIN {
    w = 0
}

/^# / {
    if (filename != "")
        close(filename)

    title = $0
    sub(/^# /, "", title)

    w++

    filename = title
    gsub(/[[:space:]]+/, "_", filename)
    gsub(/\./, "", filename)
    filename = "f_" filename ".md"

    hu_headit(filename, w, title)
}

filename != "" {
    print $0 >> filename
}

END {
    if (filename != "")
        close(filename)
}
