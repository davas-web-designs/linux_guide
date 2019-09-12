## linux file access api

1. Basic system calls:

   open() - opens a file from its path  
          - returns a numeric descriptor  
   read()/write() - reads/writes from/to a file  
                  - advances the position pointer impcitly  
   lseek() - moves the position pointer explicitly  
   close() - closes the file with its descriptor  
   
2. Read function in detail:

   ssize_t read(int fd, void *buf, size_t n_bytes);
   
   Arguments:
    - fd: file descriptor
    - buf: pointer to the memory region where the OS will copy the read data
    - n_bytes: number of bytes to read
    
   Returns:
    - If it succeeds, returns the number of read bytes or end of file
    - If it fails, returns -1
  
   Description:
    - Transfers n_bytes form the file to the memory region specified with buf
    - it moves the pointer explicitly, as much as bytes it reads.
    
3. Write function in detail:
   
   ssize_t write(int fd, void *buf, size_t n_bytes);
   
   Arguments:
    - fd: numeric descriptor of the file
    - buf: pointer to the region of memory of destination
    - n_bytes: number of bytes to write
    
   Returns:
    - If successful, returns the number of written bytes.
    - If it fails, returns -1
    
   Description:
    - Transfers n_bytes from the memory region specified in *buf to the file
    - moves the position pointer implicitly, as much as bytes it has written.
    
4. File copy example:

```
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stdio.h>

#define BUFSIZE 512

void main(int argc, char **argv){
  int fd_in, fd_out, n_read;
  char buffer[BUFSIZE];
  
  fd_in = open(argv[1], O_RDONLY);
  if(fd_in < 0){
    perror("open source file"); exit(1);
  }
  
  fdout = open(argv[2], O_WRONLY|O_CREAT|O_TRUNC, 0751);
  if(fd_out < 0){
    close(fd_ent);
    perror("open destination file"); exit(1);
  }
  
  while((n_read = read(fd_int, buffer, BUFSIZE)) > 0){
    if(write(fd_out, buffer, n_read) < n_read){
      perror("write");
      close(fd_in); close(fd_out);
      exit(1);
    }
  }
  if(n_read < 0){
    perror("read");
    close(fd_in); close(fd_out);
    exit(1);
  }
  close(fd_in); close(fd_out);
  exit(0);
}
    
  
      LIN - MódulosVersión 1.2©J.C. Sáez, M. PrietoThis work is licensed under the Creative CommonsAttribution-Share Alike3.0 Spain License. To view a copy of this license, visithttp://creativecommons.org/licenses/by-sa/3.0/es/ or send a letter toCreative Commons, 171 Second Street, Suite 300, San Francisco,California, 94105,USA.
