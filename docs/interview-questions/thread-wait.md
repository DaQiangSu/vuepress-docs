# JDK API线程通讯方式

## 被启用的suspend和resime

​	被启用的原因是，执行顺序错了以后，和在同步代码块中不会自动释放所，会造成死锁。

## wait,wait.notify,wait.notifyAll

​	在同步代码块中，会自动释放所，不会造成死锁，但顺序执行错了以后，还是会造成死锁。

## park,unPark

​	利用许可的机制，每一次调用park方法，都会重新获取许可，每一次不一致，第一次执行，第二次再去调用，上一次还没执行完成，会进入等待