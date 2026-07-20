#!/usr/bin/awk -f

BEGIN {}
{
	if ($0 ~ /^weight:/) {
		match($0,/[0-9]+/)
		w = substr($0, RSTART, RLENGTH)
		line = substr($0, 1, RSTART - 1)
		print line w-1
	}
	else
		print $0
}
END {}
