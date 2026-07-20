#!/bin/bash

for fuf in $HOME/bin/functions/*; do
#	[[ $(echo -e "${fuf}" | grep "Echocolors.fu" ) ]] && continue || grep -H "^function" --color=always ${fuf}
	[[ -f ${fuf} ]] && source ${fuf}
done  

dinputARR=( $@ ) # r!for f in $(ls *c); do echo -e "mv $f\t$f"; done
#for i in ${!dinputARR[@]}; do echo -e "${dinputARR[${i}]}" ; done
## FILES CLÁSICOS
set_FILES_CLASICOS_names_FU # d0sh awkF pyxF dexe sedF
# echo_FILES_CLASICOS_names_FU
# pardir="$(pwd | awk -F/ '{p=NF-1;print $p}')";
# dexe="${pardir}_$(basename $(pwd))"
## EO FILES CLÁSICOS
### sedit_FU TOTALPROsedit_FU 
#[[ $# > 0 ]] && [[ $1 == 's' ]] && double_check_FU $1 && sedit_FU $2 && exit
#[[ $# > 0 ]] && [[ $1 == 't' ]] && double_check_FU $1 && TOTALPROsedit_FU && exit
### xclip_d_pro_FU comoconejoSSSS_FU createdircopy_FU manual_md_to_html_FU
#[[ $# > 0 ]] && [[ $1 == 'x' ]] && shift && xclip_d_pro_FU $@ && exit # para c*
#[[ $# > 0 ]] && [[ $1 == 'x' ]] && [[ $# > 1 ]] && [[ $2 == 'p' ]] && shift && xclip_d_pro_FU $@ && exit # para *py
#[[ $# > 0 ]] && [[ $1 == 'x' ]] && [[ $# > 1 ]] && [[ $2 == 't' ]] && shift && xclip_d_pro_FU tex && exit # para *tex
#[[ $# > 0 ]] && [[ $1 == 'j' ]] && comoconejoSSSS_FU $2 && exit # hay conecone<TAB>
#[[ $# > 0 ]] && [[ $1 == 'c' ]] && [[ $# > 1 ]] && [[ ! -e "$(basename $(pwd))_$2" ]] && createdircopy_FU $@ && exit
#mdfARR=( $(find . -maxdepth 1 -type f -name "*md" -exec basename {} \; | sort -V) ) ; manual_md_to_html_FU ${mdfARR[@]}
### valgrind_FU debug_FU # grep#prototypes#CXH # MAKES
#[[ $# > 0 ]] && [[ $1 == 'v' ]] && shift && valgrind_FU $@ && exit
#[[ $# > 0 ]] && [[ $1 == 'd' ]] && shift && debug_FU $@ && exit 
#r!grep "^[a-z].*;$" $CXH | sed -ne "s/^[^\t]\+\*\?\*\?\t\([a-z][^(]\+\).*/\1/p"
#make -s || exit
#make || exit
#make re || exit
#make re -s || exit
#[[ $# > 0 ]] && [[ $1 == 'm' ]] && make -s
#rm -f error* warning* *otxt output_file out*valgrind.report *runtime_log
#if [[ ${#dinputARR[@]} != 0 ]]; then set -x ; ./${dexe} ${dinputARR[@]} ; else set -x ; ./${dexe} ; fi ; set +x
#run0shhelp "$(basename $(pwd)).0.sh" # "notclear"
# FLASK
#opyf e "${1:-${dhtml}}" ≡ EDOPYF_FU pyflask*py "${1:-${dhtml}}"
#for h in $(ls *html); do EDIHFS_FU ${h}; done
#for h in $(ls *html); do BEDIHFS_FU ${h}; done
mv cumple16_NyJ_bis.jpg.jpg	cumple16_NyJ_bis.jpg
mv cumple16_NyJyOyM.jpg.jpg	cumple16_NyJyOyM.jpg
mv cumple16_NyJyOyV.jpg.jpg	cumple16_NyJyOyV.jpg
mv parrillada2.jpg.jpg	parrillada2.jpg
