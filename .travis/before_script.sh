#
# Authentication
#
echo -e ">>> Authentication !"

git remote set-url origin $REPO.git
git config --global user.email "nandomoreira.me@gmail.com"
git config --global user.name "Fernando Moreira"

if [ -z "$id_rsa_{1..23}" ]; then echo 'No $id_rsa_{1..23} found !' ; exit 1; fi

# Careful ! Put the correct number here !!! (the last line number)
echo -n $id_rsa_{1..23} >> ~/.ssh/travis_rsa_64
base64 --decode --ignore-garbage ~/.ssh/travis_rsa_64 > ~/.ssh/id_rsa

chmod 600 ~/.ssh/id_rsa

echo -e ">>> Copy config"
mv -fv out/.travis/ssh-config ~/.ssh/config

echo -e ">>> Hi github.com !"
ssh -T git@github.com
echo -e "\n"