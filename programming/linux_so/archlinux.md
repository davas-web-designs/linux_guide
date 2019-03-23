# ARCH LINUX
*connect to network:
  *list nearby wifi networks:
    ```
    mncli device wifi list
    ```
  *connect to a wifi network:
    ```
    mncli device wifi connect SSID password password
    ```
  *disconnect an interface:
    ```
    mncli device disconnect ifname eth0
    ```
  *reconnect an interface:
    ```
    mncli connection up uuid UUID
    ```
  *see a list of devices and their state:
    ```
    mncli device
    ```
