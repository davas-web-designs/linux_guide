# ARCH LINUX
* connect to network:
  * list nearby wifi networks:
    ```
    mncli device wifi list
    ```
  * connect to a wifi network:
    ```
    mncli device wifi connect SSID password password
    ```
  * disconnect an interface:
    ```
    mncli device disconnect ifname eth0
    ```
  * reconnect an interface:
    ```
    mncli connection up uuid UUID
    ```
  * see a list of devices and their state:
    ```
    mncli device
    ```
  * if the wifi seems to be off and wont turn on even by pressing its physical button:
    ```
    rfkill unblock all
    ```
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


* PACMAN:
  * install a package:
    ```
      pacman -S package_name
    ```
  * update:
    ```
      pacman -Sy
    ```
  * upgrade:
    ```
      pacman -Su
    ```
  * delete a package (safely):
    ```
      pacman -Rdd package_name
    ```
