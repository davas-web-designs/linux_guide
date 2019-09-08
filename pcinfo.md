### this file contains useful commands to check various aspects of the pc hardware/software information

* Check kernel version:
  ```
  hostnamectl
  ```
  ```
  uname -mrs
  ```
* motherboard model (need dmidecode):
  ```
  sudo dmidecode -s baseboard-product-name
  ```
  
* Check disk usage:
  ```
  df -h
  ```
* Check disk usage of a folder or file:
  ```
  du -s ./path-to-file
  ```
* Check disk usage of a folder and its content:
  ```
  ls -al
  ```
  
  
