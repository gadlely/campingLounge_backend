# Java 17 JDK가 포함된 이미지
FROM eclipse-temurin:17-jdk

# 작업 디렉토리 생성
WORKDIR /app

# 프로젝트 전체 복사
COPY . .

# Gradle 빌드 실행 (Gradle Wrapper 사용)
RUN ./gradlew build --no-daemon

# JAR 실행 (파일명 확인!)
CMD ["java", "-jar", "build/libs/camping_lounge-0.0.1-SNAPSHOT.jar"]
