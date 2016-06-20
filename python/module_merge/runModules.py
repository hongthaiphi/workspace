from subprocess import call
home_path= ''
install_version_file= home_path + 'install.module.version.txt'
client_lines = [line.rstrip('\n') for line in open(install_version_file)]


for index in range(len(client_lines)):
    client_word = client_lines[index].split(";");
    split_url = client_word[5].split("/");
    file_name = split_url[len(split_url)-1]
    print file_name
    module_id = client_word[0]
    cmd = "mkdir source/" + module_id
    return_code = call(cmd, shell=True)
    
    cmd = "wget " + client_word[5] + " -O source/" + module_id + "/" + file_name  
    print cmd
    return_code = call("wget " + client_word[5] + " -O source/" + module_id + "/" + file_name  , shell=True)
    
    return_code = call("chmod +x source/" + module_id + "/" + file_name  , shell=True)
    return_code = call(" kill $(cat run/" + module_id + ".pid)"  , shell=True)
    cmd = "source/" + module_id + "/" + file_name  + " > /dev/null & echo $! > run/"+module_id+".pid &"
    print cmd
    
    return_code = call(cmd, shell=True)
    
    
print "finish"
