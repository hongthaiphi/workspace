home_path= '/home/sysadmin/cam9/run/'
client_file= home_path + 'client.version.txt'
server_file= home_path + 'updateServerModules.version.txt'
install_version_file= home_path + 'install.module.version.txt'
client_lines = [line.rstrip('\n') for line in open(client_file)]
# print client_lines[0]

install_content = '';

server_lines = [line.rstrip('\n') for line in open(server_file)]


for server_index in range(len(server_lines)):
    same_version = 0
    for index in range(len(client_lines)):
        server_word = server_lines[server_index].split(";");
        client_word = client_lines[index].split(";");
        if server_word[0] == client_word[0] and server_word[3] == client_word[3]:
            # same version
            same_version=1;
            break
    if (same_version == 1):    
        print server_lines[server_index]
    else:
        #put to install
        install_content += server_lines[server_index] + '\n'
print install_content
text_file = open(install_version_file, "w")
text_file.write(install_content)
text_file.close()